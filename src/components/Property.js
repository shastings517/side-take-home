import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
  root: {
    margin: '20px',
  },
});

export default function Property(props) {
  const {
    userId,
    property,
    mlsId,
    listDate,
    photos,
    listPrice,
    saved,
  } = props;

  const formatDate = () => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(listDate);

    return date.toLocaleDateString("en-US", options);
  };

  const formatPrice = () => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });

    return formatter.format(listPrice);
  };

  const handleClick = () => {
    const savedPropertyIds = JSON.parse(localStorage.getItem(userId)) || [];
    // only save id if it hasn't already been saved
    if (!savedPropertyIds.includes(mlsId)) {
      savedPropertyIds.push(mlsId);
    }
    localStorage.setItem(userId, JSON.stringify(savedPropertyIds));
  };

  const { root } = useStyles();

  return (
    <Card className={root} variant="outlined">
      <CardHeader
        action={
          !saved &&
            <IconButton
              onClick={handleClick}
              aria-label="share"
              data-testid="save-button"
            >
              <FavoriteIcon />
            </IconButton>
        }
        title={`Property #${mlsId}`}
        subheader={`List Date: ${formatDate()}`}
      />
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`Property ${mlsId}`}
          height="240"
          /* src assumes that there is always a photos array returned */
          image={photos[0]}
          title={`Property ${mlsId}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {formatPrice()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {`${property.bedrooms} beds, ${property.bathsFull} baths, ${property.bathsHalf} half baths, ${property.stories} stories`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
