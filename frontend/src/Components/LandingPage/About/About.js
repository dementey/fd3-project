import React from 'react';

import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import img1 from './1_QERgzuzphdQz4e0fNs1CFQ.gif';
import img2 from './structure.png';

//import '../css/Home.css';

const About = () => (
    <div className='home-box'>
        <Typography variant='title'>Образовательный центр Парка высоких технологий</Typography>
        <Typography variant='caption' gutterBottom={true}>Гайдук Д.А., Email: dementeyyy@gmail.comu</Typography>
        <Typography variant='title'>Выпускной проект</Typography>
        <Typography variant='title' gutterBottom={true}>"Безопасные продукты"</Typography>

        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Что сделано</TableCell>
                    <TableCell>Ресурсы</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Front-End</TableCell>
                    <TableCell>React, React-Router, Redux, material-ui, bootstrap, webpack </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Back-End</TableCell>
                    <TableCell>Node.js, RESTful API, MongoDB</TableCell>
                </TableRow>

            </TableBody>
        </Table>

        <Typography variant='body2'>Описание проекта</Typography>
        <Typography variant='body1' gutterBottom={true}>...
        </Typography>

            <img src={img1} alt="logo" className="home-logo" />
            <Typography variant='body2'>Зависимость компонентов</Typography>
            <img src={img2} alt="logo" className="home-logo" />
    </div>


);

export default About;
