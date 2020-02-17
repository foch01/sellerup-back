import express from 'express';
import { pingElasticSearch } from '@controllers/ping.controller';

const pingRoutes = express.Router();

pingRoutes.route('/ping/elasticsearch').get(pingElasticSearch);

export default pingRoutes;
