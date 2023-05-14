import React, { useRef, useState, useEffect } from 'react'
import styles from './FindZone.module.css'

// MUI Rating component import
import { Rating, Stack, Box, Tooltip, IconButton } from '@mui/material'; 
import StarIcon from '@mui/icons-material/Star';
import Search from '@mui/icons-material/Search';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import HelpIcon from '@mui/icons-material/Help'

// Google Maps import
import Maps from './Maps';

// react google maps API
import { useJsApiLoader } from '@react-google-maps/api';

// react google places autocomplete
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

// labels for hover rating
const labels = {
  1: 'Beginner',
  2: 'Easy',
  3: 'Normal',
  4: 'Hard',
  5: 'Very hard',
};

function FindZone() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA-yVU-YlGNYcwzmXzzwTHv6v12m6ReVP4",
    libraries: ['places']
  })

  const [openZone, setOpenZone] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(-1);

  const [zones, setZones] = useState([]);

  function toggleOpenZone() {
    setOpenZone(!openZone);
    setRating(0);
  }

  const location = useRef();
  const description = useRef();

  const [searchQuery, setSearchQuery] = useState(null);

  // const [open, setOpen] = useState(false);
  // const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   console.log("Value of open: ", open);
  //   console.log("Value of inputValue: ", inputValue);
  // }, [open, inputValue]);

  // Can I also use a ref for Star Rating?

  const tempZones = [
    {
      id: 193,
      latitude: 52.7514,
      longitude: -1.973,
      title: "Cannock Chase",
      groupLink: "https://www.facebook.com/groups/1669929603286380",
      imageUrl: "https://res.cloudinary.com/dpryg3lq9/image/upload/v1683969399/Cannock_Chase_Img.jpg",
      description: "Just north of Brum lies Cannock Chase. Mixture of trail centre routes, Dh tracks, & off piste goodness.",
      rating: 3,
      exactName: "Cannock Chase MTB Riders"
    },
    {
      id: 194,
      latitude: 51.8397,
      longitude: -2.1147,
      title: "Project 417",
      groupLink: "https://www.facebook.com/groups/721261079585555",
      imageUrl: "https://awscdn.com/image_1",
      description: "Dirt jumps, pump track, Dh tracks, 417 has it all. Perfect place to hone your bike skills on a summer eve sesh.",
      rating: 3,
      exactName: "NuZones - Project 417 Riders"
    },
    {
      id: 195,
      latitude: 51.8089,
      longitude: -2.5697,
      title: "Forest of Dean",
      groupLink: "https://www.facebook.com/groups/587317431370570",
      imageUrl: "https://awscdn.com/image_1",
      description: "Great mixture of Dh, enduro, & XC tracks. FOD has a tremendous amount of off piste, find yourself a local and get exploring.",
      rating: 4,
      exactName: "Forest of Dean \"FOD\" Mountain Biking"
    },
    {
      id: 196,
      latitude: 51.8095,
      longitude: -2.667,
      title: "Staunton",
      groupLink: "https://www.facebook.com/groups/877051753602558",
      imageUrl: "https://awscdn.com/image_1",
      description: "Home to Dirt magazine, large rocks, & beautiful views. Staunton is the definition of hidden gold.",
      rating: 3,
      exactName: "NuZones - Staunton Riders"
    },
    {
      id: 197,
      latitude: 52.3869,
      longitude: -2.9479,
      title: "Hopton ",
      groupLink: "https://www.facebook.com/groups/695396938952063",
      imageUrl: "https://awscdn.com/image_1",
      description: "Hopton's great trail centre loops & Dh tracks are an excellent preview of what to expect from Shropshire trails.",
      rating: 3,
      exactName: "NuZones - Hopton Riders"
    },
    {
      id: 198,
      latitude: 52.36,
      longitude: -2.9627,
      title: "Bucknell",
      groupLink: "https://www.facebook.com/groups/904953367440915",
      imageUrl: "https://awscdn.com/image_1",
      description: "Wow, what a place. A single great Dh track, but off piste everywhere you can see. If you are nearby, it's definitely worth checking out. ",
      rating: 4,
      exactName: "NuZones - Bucknell Riders"
    }
  ]

  const getZones = async () => {
    try {
      let response = await fetch('/api/v1/zones?page=0&size=1000')
      let data = await response.json()
      setZones(data.content)
    } catch (err) {
      console.error(err);
      console.log("setting zones to tempZones for dev");
      setZones(tempZones);
    }
  }

  useEffect(() => {
    getZones();
  }, []);

  return (
    <div className='content'>
      <h1 className='title'>Find a Zone</h1>
      <Autocomplete
        componentsProps={{
          paper: {
            sx: {
              marginTop: '10px',
              borderRadius: '0.8rem',
            },
            elevation: 5,
          }
        }}
        freeSolo={true}
        // clearIcon={<ClearIcon fontSize="inherit" />}
        disableClearable
        sx={{ width: '90%' }}
        options={zones.map((zone) => zone.title)}
        onInputChange={(event, newValue) => {
          const searchZone = zones.find(zone => zone.title === newValue);
          if (searchZone) {
            setSearchQuery(searchZone);
          }
        }}
        // open={open}
        // onOpen={() => {
        //   // only open when in focus and inputValue is not empty
        //   if (inputValue) {
        //     setOpen(true);
        //   }
        // }}
        // onClose={() => setOpen(false)}
        // inputValue={inputValue}
        // onInputChange={(e, value, reason) => {
        //   setInputValue(value);

        //   // only open when inputValue is not empty after the user typed something
        //   if (!value) {
        //     setOpen(false);
        //   }
        // }}
        renderInput={(renderInputParams) => (
          <div ref={renderInputParams.InputProps.ref}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <TextField 
              style={{ flex: 1 }} 
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "0.8rem",
      
                  legend: {
                    marginLeft: "30px"
                  }
                },
                "& .MuiAutocomplete-inputRoot": {
                  paddingLeft: "20px !important",
                  borderRadius: "0.8rem",
                },
                "& .MuiInputLabel-outlined": {
                  paddingLeft: "20px",
                },
                "& .MuiInputLabel-shrink": {
                  marginLeft: "20px",
                  paddingLeft: "10px",
                  paddingRight: 0,
                  background: "white",
                },
              }}
              InputProps={{
                ...renderInputParams.InputProps, startAdornment: (<InputAdornment position='start'> <Search /> </InputAdornment>),
              }}
              placeholder='Search'
              inputProps={{ ...renderInputParams.inputProps }}
              InputLabelProps={{ style: { display: 'none' } }}
            />
            </div>
        )}
      />
      <div className={styles.map}>
        <Maps zones={zones} searchedZone={searchQuery} isLoaded={isLoaded}/>
      </div>
      <div className={styles.missZone}>
        <h2>Have we missed a zone?</h2>
        <p>Let us know where to add one!</p>

        {openZone ?
        <div className={styles.openZone}>
          <div className={styles.inputs}>
            {/* <input placeholder='Type a location' ref={location}/> */}
            <GooglePlacesAutocomplete 
              minLengthAutocomplete={2}
            />
            {/* <GooglePlacesAutocomplete
              selectProps={{
                placeholder: 'Type a location',
              }}
            /> */}
            <textarea rows={4} placeholder='Description of this location' ref={description}/>
            <div className={styles.rating}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center'}}>
                <p>How difficult is this zone?</p>
                <Tooltip title="Insert informations on how to rate the difficulty of a zone" 
                  placement='top' 
                  enterTouchDelay={0}
                >
                  <IconButton>
                    <HelpIcon sx={{ fontSize: '1.25rem' }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating name="rating" value={rating}
                  icon = {<StarIcon style={{width:"2rem",height:"2rem"}}></StarIcon>}
                  emptyIcon = {<StarOutlineIcon style={{width:"2rem",height:"2rem"}}></StarOutlineIcon>}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  onChange={(event, newRating) => {
                    setRating(newRating);
                  }} 
                />
                {rating !== null && (
                  <div style={{ marginLeft: '0.5rem', display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <p>{labels[hover !== -1 ? hover : rating]}</p>
                  </div>
                )}
              </Box>
            </div>
            
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.submit}>Submit</button>
            <button className={styles.cancel} onClick={toggleOpenZone}>Cancel</button>
            {/* Be carefull to, when submitting, get the value of the rating before closing the menu, because closing resets the value */}
          </div>
        </div>
        :
        <button className={styles.addZone} onClick={toggleOpenZone}>Add a Zone</button>
        }

      </div>
    </div>
  )
}

export default FindZone