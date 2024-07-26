import { Box, Button, TextField } from '@mui/material';
import React, { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  onSubmit: () => void;
  setIsEditing: Dispatch<SetStateAction<boolean>>;
};

export const InlineEdit: FC<Props> = ({ onSubmit, setIsEditing }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField id="name" variant="outlined" />
      <TextField id="email" variant="outlined" />
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={() => {
            onSubmit();
            setIsEditing(false);
          }}
        >
          Guardar
        </Button>
        <Button
          onClick={() => {
            setIsEditing(false);
          }}
        >
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};
