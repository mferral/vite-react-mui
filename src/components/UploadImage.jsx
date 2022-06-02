import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { forwardRef, useImperativeHandle } from 'react'
import { useState, useEffect } from 'react'
const UploadImage = forwardRef(({ url }, ref) => {
    const [uploadData, setUploadData] = useState({
        selectedFile: null,
        file: null
    });

    useEffect( () => {        
        setUploadData({
                ...uploadData,
                selectedFile: url
        })
    }, [url])

    useImperativeHandle(ref, () => ({
        getUploadFile() {             
            return uploadData.file
        }
    }));

    const handleUploadClick = event => {
        const file = event.target.files[0];        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function(e) {
            setUploadData({
                selectedFile: reader.result,
                file
            });            
        }      
    }
return (
    
<>
    <Grid container spacing={2} sx={{                                
                width: { xs: '100%', md: 300 },
            }} direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>  
            { uploadData.selectedFile ?      
            <Box component="img" sx={{                                    
                    width: { xs: '100%', md: 300 },
                }} alt="Foto"                
                src={uploadData.selectedFile} />
            :<Box component="img" sx={{                
                    width: 50,   
                }} alt="Foto"
                src="https://elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/upload.png" />
            }
        </Grid>
        <Grid item xs={12}>
            <Button variant="contained"  component="label" size="small">
                Cargar Imagen
                <input type="file" hidden accept="image/*" onChange={handleUploadClick} />
            </Button>
        </Grid>
    </Grid>

</>
)
})

export default UploadImage 