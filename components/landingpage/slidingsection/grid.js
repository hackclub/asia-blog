import { jsx, Grid } from 'theme-ui'
import Styled from '@emotion/styled'

export default Styled(Grid)`
::-webkit-scrollbar {
    -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
    width: 12px;
}

::-webkit-scrollbar:horizontal {
    height: 9px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .4);
    border-radius: 10px;
    border: 2px solid #ffffff;
}

::-webkit-scrollbar-track {
    border-radius: 10px;  
    background-color: #ffffff; 
}
`
