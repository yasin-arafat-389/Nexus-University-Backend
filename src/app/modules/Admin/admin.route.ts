import express from 'express';
import { AdminControllers } from './admin.controller';

const router = express.Router();

router.get('/:id', AdminControllers.getSingleAdmin);

router.put('/:id', AdminControllers.updateAdmin);

router.delete('/:id', AdminControllers.deleteAdmin);

router.get('/', AdminControllers.getAllAdmin);

export const AdminRoutes = router;
