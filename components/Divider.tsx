import React from 'react';
import { Divider as CkraDivider, Grid  } from "@chakra-ui/react";

// import { Container } from './styles';

const components: React.FC = () => {
  return (
    <Grid
      gridTemplateColumns='1fr 1fr'
      columnGap={12}
      opacity={0.4}
    >
      <CkraDivider marginY={6} />
      <CkraDivider marginY={6} />
    </Grid>
  );
}

export default components;