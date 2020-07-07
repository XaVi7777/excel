import { Router } from '@core/router/Router';
import { DashboardPage } from './pages/DashBoardPage';
import { ExcelPage } from './pages/ExcelPage';
import './scss/index.scss';

new Router('#app', {
  dashboard: DashboardPage,
  excel: ExcelPage,
});

