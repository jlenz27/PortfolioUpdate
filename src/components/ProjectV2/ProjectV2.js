import React from 'react';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Chip,
  Avatar,
} from '@mui/material';
import Container from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';


import { PROJECTS } from '../../Constants/ProjectsConstants';
//import { GitHub } from '@mui/icons-material';


const ProjectsV2 = (props) => {

  const { viewPort } = props;
  

  return (
    <><Container id='project'>
     
      </Container><>
              <Card
                  sx={{
                      backgroundColor: 'rgb(5,5,5)',
                      borderRadius: 0
                  }}
              >
                  <Grid
                      container
                      sx={{
                          position: 'relative',
                          textAlign: 'center',
                      }}
                  >

                      <Typography
                          variant='h3'
                          sx={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              fontWeight: 'bold',
                              fontSize: viewPort < 600 ? 60 : 100,
                              textShadow: 'rgb(10,25,41) -8px 0px 0px',
                              color: 'lightgray'
                          }}
                      >
                      </Typography>
                  </Grid>
                  <Grid
                      display='flex'
                      flexWrap='wrap'
                  >
                      <Grid
                          container
                          direction='row'
                          alignItems="flex-start"
                          justifyContent="flex-start"
                      >
                          {PROJECTS.map(project => {
                              return (
                                  <Grid
                                      md={12}
                                      lg={6}
                                      xl={4}
                                  >
                                      <Card
                                          elevation={5}
                                          sx={{
                                              position: 'relative',
                                              bottom: 0,
                                              margin: viewPort < 600 ? 1 : 10,
                                              marginBottom: viewPort < 600 ? 5 : 'none',
                                              marginTop: viewPort < 600 ? 5 : 'none',
                                              borderRadius: 5,
                                              backgroundColor: 'rgb(37, 39, 41)',
                                              color: 'white',
                                              transition: 'bottom 0.50s, boxShadow 0.50s',
                                              '&: hover': {
                                                  boxShadow: '0px 0px 0px 3px pink',
                                                  bottom: 20
                                              }
                                          }}>
                                          <CardActionArea
                                              target='_blank'
                                              rel='noopener noreferrer'
                                              href={project.link}
                                          >
                                              <CardMedia
                                                  component="img"
                                                  height="250"
                                                  image={project.image}
                                                  alt={`${project.name} splash page`} />
                                              <CardContent
                                                  sx={{
                                                      padding: 3,
                                                  }}
                                              >
                                                  <Typography gutterBottom variant="h5" component="div">
                                                      {project.name}
                                                  </Typography>
                                                  <Typography variant="body2">

                                                      {project.techStack.map(language => {
                                                          return (
                                                              <Chip
                                                                  color="success"
                                                                  size="small"
                                                                  label={language}
                                                                  avatar={<Avatar>{language[0]}</Avatar>}
                                                                  sx={{
                                                                      marginRight: 1,
                                                                      marginBottom: 1,
                                                                  }} />
                                                          );
                                                      })}
                                                  </Typography>
                                                  <hr />
                                                  <Typography
                                                      variant="body2"
                                                      sx={{
                                                          fontSize: '20px'
                                                      }}
                                                  >
                                                      {project.description}
                                                  </Typography>
                                              </CardContent>
                                          </CardActionArea>
                                          <CardActions>
                                              <Button
                                                  size="block"
                                                  color="success"
                                                  variant="contained"
                                                  href={project.repo}
                                                  //startIcon={<GitHub />}
                                                  sx={{
                                                      margin: 2,
                                                      width: '100%'
                                                  }}
                                              >
                                                  Repo
                                              </Button>
                                          </CardActions>
                                      </Card>
                                  </Grid>
                              );
                          })}
                      </Grid>
                  </Grid>
              </Card>
          </></>
  )

}

export default ProjectsV2

