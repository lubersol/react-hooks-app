import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01-useState/CounterApp'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';

//Abajo, renderizamos el componente que queremos ver según avanzamos en el curso.
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre />
  // </React.StrictMode>,
)
