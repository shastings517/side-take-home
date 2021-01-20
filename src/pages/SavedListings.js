import Grid from '@material-ui/core/Grid';
import { createResource } from '../api/endpoints';
import Property from '../components/Property';

const resource = createResource();

export default function SavedListings({ userId }) {
  /* call .read() here so that the Suspense component knows when to render
    https://reactjs.org/docs/concurrent-mode-suspense.html */
  const properties = resource.properties.read();
  const savedPropertyIds = JSON.parse(localStorage.getItem(userId)) || [];
  const savedProperties = properties.filter(el => savedPropertyIds.includes(el.mlsId));

  return (
    <div className='savedListings'>
      <h1>Saved Listings</h1>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {savedProperties.map((propertyData) => (
          <Grid
            key={propertyData.mlsId}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Property saved key={propertyData.mlsId} {...propertyData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
