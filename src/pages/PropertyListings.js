import Grid from '@material-ui/core/Grid';
import { createResource } from "../api/endpoints";
import Property from "../components/Property";

const resource = createResource();

export default function PropertyListings({ userId }) {
  /* call .read() here so that the Suspense component knows when to render
    https://reactjs.org/docs/concurrent-mode-suspense.html */
  const properties = resource.properties.read();

  return (
    <div className="propertyListings">
      <h1>Property Listings</h1>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
      >
        {properties.map((propertyData) => (
          <Grid
            key={propertyData.mlsId}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
          >
            <Property userId={userId} {...propertyData} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
