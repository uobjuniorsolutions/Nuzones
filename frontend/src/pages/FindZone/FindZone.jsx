import React, { useRef, useState, useEffect } from 'react'
import styles from './FindZone.module.css'

// MUI Rating component import
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box'
import StarIcon from '@mui/icons-material/Star';
import Search from '@mui/icons-material/Search';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import HelpIcon from '@mui/icons-material/Help'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Google Maps import
import Maps from './Maps';

// react google maps API
import { useJsApiLoader } from '@react-google-maps/api';

// react google places autocomplete
import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

// labels for hover rating
const labels = {
  1: "Nice & Chill",
  2: "Add smiles there",
  3: "It's getting fruty",
  4: "Ok ok, letsavew",
  5: "Pure madness",
};

const googleMapsLibraires = ['places'];

function FindZone() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA-yVU-YlGNYcwzmXzzwTHv6v12m6ReVP4",
    libraries: googleMapsLibraires
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
      id:	230,
      latitude:	52.2196,
      longitude:	-0.8835,
      title:	"Northampton",
      groupLink:	"https://www.facebook.com/groups/623487016282351",
      imageUrl:	"https://res.cloudinary.com/dpryg3lq9/image/upload/v1683969409/Northampton.jpg",
      description:	"A former golf course transformed into something much better. Green up to black runs available for you daring lot.",
      rating:	2,
      exactName:	"NuZones - Northampton Bike Park Riders"
    },
    {
      id:	233,
      latitude:	52.3769,
      longitude:	-2.0037,
      title:	"Lickey Hills & Clent",
      groupLink:	"https://www.facebook.com/groups/221484700401949",
      imageUrl:	"https://res.cloudinary.com/dpryg3lq9/image/upload/v1683969407/Lickey_Hills_Clent.jpg",
      description:	"Short punchy descents littered with steep shutes by the side of a picturesque golf course, Birmingham has trails? Yes it does!",
      rating:	2,
      exactName:	"NuZones - Lickey & Clent Hills Riders"
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

  const style = {
    control: base => ({
      ...base,
      border: '2px solid #e3e3e3',  
      borderRadius: '10px',
      boxShadow: 'none',
      padding: '0.3rem 0',
      fontWeight: '400',
      "&:hover": {
        borderColor: "#e3e3e3",
      },
    }),
    singleValue: (base) => ({
      ...base,
      whiteSpace: 'normal'
    }),
  };

  const disableIndicators = {
    LoadingIndicator:() => null,
    DropdownIndicator:() => null, 
    IndicatorSeparator:() => null
  }

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

  // state for whether or not the react select menu is open or not
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // state for the googlePlacesAutocomplete
  const [googlePlacesValue, setGooglePlacesValue] = useState(null);

  const getLatLngFromAddress = async () => {
    try {
      const results = await geocodeByAddress(googlePlacesValue.label);
      const latLng = await getLatLng(results[0]);
      return latLng
    } catch (error) {
      console.error(error)
    }
  }

  const sendAddZoneEmail = async (event) => {
    event.preventDefault();

    const latLng = await getLatLngFromAddress(); 

    const requestBody = {
      type: "add_new_zone",
      data: {
          name: googlePlacesValue.label,
          description: description.current.value,
          rating: rating,
          longitude: latLng.lng,
          latitude: latLng.lat,
      }
    }

    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestBody)
    };

    try {
      const response = await fetch('/api/v1/email', requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("The email was successfully sent!")
      }
  
    } catch (error) {
      console.log("Error:", error);
    }

    // Before toggling the modal, add animation to the button saying whether or not sent the form
    setTimeout(() => {
      setGooglePlacesValue("");
      setOpenZone(false);
    }, 1000);

    //Then, toggle the modal
  }

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
          },
        }}
        freeSolo={true}
        // clearIcon={<ClearIcon fontSize="inherit" />}
        disableClearable
        sx={{ 
          width: '90%',
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              border: "2px solid #e3e3e3"
          },
        }}
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
        <form onSubmit={sendAddZoneEmail} className={styles.openZone}>
          <div className={styles.inputs}>
            <GooglePlacesAutocomplete 
              minLengthAutocomplete={2}
              selectProps={{
                value: googlePlacesValue,
                onChange: setGooglePlacesValue,
                openMenuOnClick: false,
                isClearable: true,
                styles: style,
                placeholder: 'Type a location',
                components: disableIndicators,
                onInputChange: ((value) => {setMenuIsOpen(value.length >= 2)}),
                menuIsOpen: menuIsOpen
              }}
            />
            <textarea ref={description} rows={4} style={{ padding: '0.4rem' }} placeholder='Description of this location'/>
            {/* <div className={styles.rating}>
              <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center'}}>
                <p>How difficult is this zone?</p>
                <Tooltip
                  open={true}
                  title={
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      <p style={{ fontSize: '0.9rem' }}>How to rate the difficulty of a zone?</p>
                      <ul style={{ paddingLeft: '0.5rem' }}>
                        <li style={{ fontSize: '0.7rem' }}>1 star - Expect fun flowy tracks similar to a green</li>
                        <li style={{ fontSize: '0.7rem' }}>2 stars - Trails with small features to make ya smile</li>
                        <li style={{ fontSize: '0.7rem' }}>3 stars - Natural goodness imagine blue/red</li>
                        <li style={{ fontSize: '0.7rem' }}>4 stars - Ramping it up now, be prepared</li>
                        <li style={{ fontSize: '0.7rem' }}>5 stars - Pro lines, are you ready?</li>
                      </ul>
                    </div>
                  }
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
            </div> */}
            {/* <Accordion 
              disableGutters
              elevation={0}
              sx={{
                border: "2px solid #e3e3e3",
                color: "#747474",
                
                "&.MuiAccordion-root:last-of-type": {
                  borderRadius: "10px", 
                },

                "&.MuiAccordion-root:before": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Need help in rating a zone?</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.accordionDetails}>
                  <p>Rating the difficulty of a zone can be quite difficult and very subjective.</p>
                  <p>That's why we came up with the following rating system to guide you in the process: </p>
                  <ul >
                    <li><strong>1 star</strong> - Expect fun flowy tracks similar to a green</li>
                    <li><strong>2 stars</strong> - Trails with small features to make ya smile</li>
                    <li><strong>3 stars</strong> - Natural goodness imagine blue/red</li>
                    <li><strong>4 stars</strong> - Ramping it up now, be prepared</li>
                    <li><strong>5 stars</strong> - Pro lines, are you ready?</li>
                  </ul>
                </div>
              </AccordionDetails>
            </Accordion> */}

            <Accordion 
              disableGutters
              elevation={0}
              sx={{
                border: "2px solid #e3e3e3",
                color: "#747474",
                
                "&.MuiAccordion-root:last-of-type": {
                  borderRadius: "10px", 
                },

                "&.MuiAccordion-root:before": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <p>Rate the zone</p>
              </AccordionSummary>
              <AccordionDetails>
                <div className={styles.accordionDetails}>
                  <p>Rating the difficulty of a zone can be quite difficult and very subjective.</p>
                  <p>That's why we came up with the following rating system to guide you in the process: </p>
                  
                  <ul >
                    <li><strong>1 star</strong> - Expect fun flowy tracks similar to a green</li>
                    <li><strong>2 stars</strong> - Trails with small features to make ya smile</li>
                    <li><strong>3 stars</strong> - Natural goodness imagine blue/red</li>
                    <li><strong>4 stars</strong> - Ramping it up now, be prepared</li>
                    <li><strong>5 stars</strong> - Pro lines, are you ready?</li>
                  </ul>

                  <hr style={{ marginTop: '0.5rem' }}/>

                  <p style={{ fontSize: '1rem', fontWeight: '400', marginTop: '0.5rem'}}>Now, rate the zone you want us to add</p>
                  <p style={{ marginTop: '-0.3rem', fontSize: '0.7rem'}}>Click on the stars below to give a rating</p>

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
                        <p style={{ fontSize: '0.9rem', fontWeight: '400'}}>{labels[hover !== -1 ? hover : rating]}</p>
                      </div>
                    )}
                  </Box>

                </div>
              </AccordionDetails>
            </Accordion>
            
          </div>
          <div className={styles.buttonRow}>
            <button type='submit' onClick={sendAddZoneEmail} className={styles.submit}>Submit</button>
            <button type='button' className={styles.cancel} onClick={toggleOpenZone}>Cancel</button>
            {/* Be carefull to, when submitting, get the value of the rating before closing the menu, because closing resets the value */}
          </div>
        </form>
        :
        <button className={styles.addZone} onClick={toggleOpenZone}>Add a Zone</button>
        }

      </div>
    </div>
  )
}

export default FindZone