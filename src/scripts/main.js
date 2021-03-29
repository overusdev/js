'use strict';

import { usePromises } from './modules/async/promise';
import { useAsync } from './modules/async/async';
import { statusBarComponent } from '../components/statusBar/statusBar';
import { Api } from './api';

const mainElement = document.querySelector('#chat');


const api = new Api();

api.getItems().then((data) => {

    const statusBarElement = new statusBarComponent(data);
    const barTemplate = statusBarElement.getTemplate();

    mainElement.insertAdjacentHTML('beforeEnd', barTemplate);
})
.catch((e) =>
  console.log(e)
);

useAsync();
usePromises();
