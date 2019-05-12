import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ExampleSimpleChart from './ExampleSimpleChart';
import ExampleVerticalChart from './ExampleVerticalChart';
import ExampleMultiChart from './ExampleMultiChart';
import ExampleAreaChart from './ExampleAreaChart';
import ExampleBarChart from './ExampleBarChart';
import ExampleCircleChart from './ExampleCircleChart';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import './home.css';
export default class Home extends Component {
    render() {
        return (
            <div className="home-page">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className="home-page-wrapper container"
                >
                    <Grid item>
                        <Typography className="home-title" variant="h6" color="inherit" >Создайте первый график за несколько минут</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className='home-description' variant="body1">
                            Графики - это бесплатное простое веб-приложение для создание, использование и анализа графиков, на основе введеных пользователем данных, с возможностью импорта, экспорта.
                            Веб-приложение дает возможно по-разному модифицировать, стилизовать графики на основе пользовательских вкусов.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button type="submit" variant="contained" color="primary" className="home-begin-work">
                            Начать работу
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="column"
                    justify="center"
                    className="container"
                    
                >
                    <Grid item>
                        <Typography className="home-title" variant="h6" color="inherit" >Возможности</Typography>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justify="center"
                        spacing={24}
                    >
                        <Grid item xl={6}  sm={12}  className="item-charts">
                            <Card className="card" >
                                <CardContent className="card">
                                    <Typography variant="h6" color="inherit" >Горизонтальный график</Typography>
                                    <ExampleSimpleChart/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xl={6}  sm={12} className="item-charts">
                            <Card className="card">
                                <CardContent className="card">
                                    <Typography variant="h6" color="inherit" >Вертикальный график</Typography>
                                    <ExampleVerticalChart/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xl={6}  sm={12} className="item-charts">
                            <Card className="card">
                                <CardContent className="card">
                                    <Typography  variant="h6" color="inherit" >Мульти-график</Typography>
                                    <ExampleMultiChart/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xl={6}  sm={12}  className="item-charts">
                            <Card className="card">
                                <CardContent className="card">
                                    <Typography  variant="h6" color="inherit" >Закрашенные график</Typography>
                                    <ExampleAreaChart/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xl={6}  sm={12}  className="item-charts">
                            <Card className="card">
                                <CardContent className="card">
                                    <Typography  variant="h6" color="inherit" >Столбчатые диаграммы</Typography>
                                    <ExampleBarChart/>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xl={6}  sm={12}  className="item-charts">
                            <Card className="card">
                                <CardContent className="card">
                                    <Typography  variant="h6" color="inherit" >Диаграммы</Typography>
                                    <ExampleCircleChart/>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    className="container"
                >
                    <Grid item>
                        <Typography className="home-title" variant="h6" color="inherit" style={{marginTop: '60px', marginBottom:'30px'}} >Часто задаваемые вопрос</Typography>
                    </Grid>

                    <Grid
                        container
                        direction="column"
                        alignItems="center"
                    >
                        <Grid item className="faq-item">
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6">Использование данного сервиса полностью бесплатное?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    Да, использование этого сервиса абсолютyо бесплатное.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                        <Grid item className="faq-item">
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6" >В будущем будет ли сервис платным?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    В будущем будeт добавлены специальные подписки, которые дают больше преимуществ при использование сервиса.
                                    Но, бесплатное использование никогда не пропадет.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                        <Grid item className="faq-item">
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography variant="h6"  >Будет ли данный сервис на телефонах / компьютерах?</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                <Typography>
                                    Разумеется. 
                                    В ближайшем будущем мы сделаем мобильное приложение и десктопное приложение, чтобы пользователям было легче и удобнее пользоваться.
                                </Typography>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    className="container"
                >
                    <Grid item>
                        <Typography className="home-title" variant="h6" color="inherit" style={{marginTop: '60px', marginBottom:'30px'}} >Остались вопросы? Задайте!</Typography>
                    </Grid>

                    <form>
                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item class="question-item">
                                <TextField
                                    id="outlined-name"
                                    label="Имя"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item class="question-item">
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Вопрос"
                                    multiline
                                    rows="4"
                                    rowsMax="10"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item class="question-item"> 
                            <Button type="submit" variant="outlined" color="primary" fullWidth style={{marginTop:'30px', height:'55px'}}>
                                Отправить
                            </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </div>

        )
    }
}