import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export const PersonajeCard = ({ nombre, especie, url }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={url}
                title={nombre}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nombre}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Especie: {especie}
                </Typography>
            </CardContent>
        </Card>
    );
}

PersonajeCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    especie: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};