import * as React from 'react';
import { Box } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard({ name, description, locks, handleModal, groupId }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          description: {description}
        </Typography>
        <Typography component={'span'} sx={{ mb: 1.5 }} color="text.secondary">
          Assigned locks: {locks && locks.map((item, i) => <Box key={i}>{item.lock.name}</Box>)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => handleModal(groupId, true)} size="small">
          Assign
        </Button>
        <Button onClick={() => handleModal(groupId, false)} size="small">
          De-Assign
        </Button>
      </CardActions>
    </Card>
  );
}
