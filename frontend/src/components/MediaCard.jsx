import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

export default function MediaCard({ imgUrl }) {
  return (
    <Card sx={{ margin: '40px auto', width: 400 }}>
      <CardMedia
        sx={{ height: 350 }}
        image={imgUrl}
        title="Sample Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Linda
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
         Hey there! I'm Linda, a professional guitarist with a passion for music and connecting with new people. I love sharing my music and learning about others' musical journeys. Let's connect and jam together!
        </Typography>
      </CardContent>
      <CardActions>
        <Chip
        variant='outlined'
          color="error"
          sx={{
            margin: 'auto',
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
          }}
          label={<CloseIcon fontSize="large" />}
        />
        <Chip
          variant='outlined'
          color="success"
          sx={{
            margin: 'auto',
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
          }}
          label={<DoneIcon fontSize="large"/>}
        />
      </CardActions>
    </Card>
  );
}
