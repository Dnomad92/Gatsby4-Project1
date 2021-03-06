import React from "react"
import {createGlobalStyle, ThemeProvider} from "styled-components"
import Theme from "./src/themes/themes"


// const GlobalStyles = createGlobalStyle`
// 	*{
// 		box-sizing: border-box;
// 		margin: 0;
// 		padding: 0;
// 	}

// 	body, html {
// 		font-family: ${props=> props.themes.fonts.main};
// 		height: 100%;
// 		background-color: ${props => props.themes.colors.ligth1};
// 	}
//  `; 


export const wrapRootElement = ({element}) => {
		return(
			<ThemeProvider theme={Theme}>
				// <GlobalStyles />
				{element}
			</ThemeProvider>
		)
	}