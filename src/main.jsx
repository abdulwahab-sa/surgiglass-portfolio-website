import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthContextProvider } from './Contexts/AuthContext';
import { APIContextProvider } from './Contexts/ProductContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<APIContextProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</APIContextProvider>
	</React.StrictMode>
);
