import { Box, Typography, Avatar } from '@mui/material';
import { SystemStyleObject, Theme } from '@mui/system';
import { InlineEdit } from '../molecules/InlineEdit';

import { Card } from '@components/atoms';
import { IContact } from 'react-coding-interview-shared/models';
import { useState } from 'react';

export interface IContactCardProps {
  person: IContact;
  sx?: SystemStyleObject<Theme>;
}

export const ContactCard: React.FC<IContactCardProps> = ({
  person: { name, email },
  sx,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    console.log('call update api');
  };

  return (
    <Card sx={sx}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Avatar />
        <Box textAlign="center" mt={2}>
          {isEditing ? (
            <InlineEdit onSubmit={handleSubmit} setIsEditing={setIsEditing} />
          ) : (
            <>
              <Typography
                variant="subtitle1"
                lineHeight="1rem"
                onClick={() => setIsEditing(true)}
              >
                {name}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                onClick={() => setIsEditing(true)}
              >
                {email}
              </Typography>
            </>
          )}
        </Box>
      </Box>
    </Card>
  );
};
