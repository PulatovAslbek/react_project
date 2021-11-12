import { createContext, useState } from 'react';
import { dictionary } from './data/data';

const ThemeContext = createContext();


const ThemeProvider = ({ children }) => {
	
	// states
	const [lang, setLang] = useState('uz');

	return (
		<ThemeContext.Provider value={[dictionary, lang, setLang]}>
			{ children }
		</ThemeContext.Provider>
	);
}

export {
	ThemeContext,
	ThemeProvider,
}
