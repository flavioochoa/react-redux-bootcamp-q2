import * as React from "react";

import { useEffect, useState } from "react";

import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { Item } from "../../models/Products";
import { PRODUCT_DETAILS } from "../../data/Constants";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const ProductSearchBar: React.FC = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Array<Item>>([]);
  const loading = open && options.length === 0;

  const [selectedValue, setSelectedValue] = useState<Item | null>(null);

  const { fetch, products } = useProducts();

  useEffect(() => {
    (async () => {
      if (!products || !products.items.length) {
        await fetch(); // For demo purposes.
        return;
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      if (active) {
        setOptions([...products.items]);
      }
    })();

    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  useEffect(() => {
    if (selectedValue) {
      const { id } = selectedValue;
      history.push(PRODUCT_DETAILS.replace(":id", id.toString()));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue]);

  return (
    <Autocomplete
      value={selectedValue}
      onChange={(event: any, newValue: Item) => {
        setSelectedValue(newValue);
      }}
      id="asynchronous-demo"
      sx={{ width: 350, background: "white", margin: "5px" }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option: Item, value: Item) =>
        option.name === value.name
      }
      getOptionLabel={(option: Item) => option.name}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          size="small"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};
