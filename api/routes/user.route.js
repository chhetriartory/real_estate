import express from 'express'
import { test } from '../controllers/user.controller.js';

const rounter = express.Router();

rounter.get('/test',test)

export default rounter