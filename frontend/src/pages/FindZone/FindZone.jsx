import React, { useRef, useState, useEffect } from 'react'
import styles from './FindZone.module.css'

// MUI Rating component import
import { Rating, Stack } from '@mui/material'; 
import StarIcon from '@mui/icons-material/Star';
import Search from '@mui/icons-material/Search';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

// Google Maps import
import Maps from './Maps';

function FindZone() {

  const [openZone, setOpenZone] = useState(false);
  const [rating, setRating] = useState(0);

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
      imageUrl: "https://awscdn.com/image_1",
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
    let response = await fetch('/api/v1/zones?page=0&size=1000')
    let data = await response.json()
    setZones(data.content)
  }

  useEffect(() => {
    // getZones();
    setZones(tempZones);
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
              maxHeight: '150px'
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
        <Maps zones={zones} searchedZone={searchQuery}/>
      </div>
      <div className={styles.missZone}>
        <h2>Have we missed a zone?</h2>
        <p>Let us know where to add one!</p>

        {openZone ?
        <div className={styles.openZone}>
          <div className={styles.inputs}>
            <input placeholder='Type a location' ref={location}/>
            <textarea rows={4} placeholder='Description of this location' ref={description}/>
            <div className={styles.rating}>
              <p>Rating: </p> 
              <Rating name="rating" value={rating}
                icon = {<StarIcon style={{width:"2rem",height:"2rem"}}></StarIcon>}
                emptyIcon = {<StarOutlineIcon style={{width:"2rem",height:"2rem"}}></StarOutlineIcon>}
                onChange={(event, newRating) => {
                  setRating(newRating);
                }} 
              />
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