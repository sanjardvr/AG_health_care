import { Alert, Box, Snackbar, TextField } from "@mui/material";
import style from "./style.module.scss";
import { Dropdown } from 'primereact/dropdown';
import { useRef, useState } from "react";
import React from "react";
import { getStrapiURL } from "@/utils";
import { useRouter } from "next/router";

export default function About() {
    const [goal_value, setGoal] = useState(Object);
    let goal = goal_value.name
    const goals = [
        { name: 'gain mass'},
        { name: 'lose some weight'},
        { name: 'food suitable for my allergies'},
        { name: 'avoid sweets'},
        { name: 'limit fatty foods'}
    ];
    const [fullname, setFullName] = useState("");
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [gender, setGender] = useState("");
    const router = useRouter();
  
    // * Handling an alert that pop ups after succsessful submit
    const [open, setOpen] = useState(false);
    const handleClose = (
       event?: React.SyntheticEvent | Event,
       reason?: string
    ) => {
       if (reason === 'clickaway') return;
       setOpen(false);
    };
  
    const handleFullName = (event: any) => {
      setFullName(event.target.value);
    };
    const handleAge = (event: any) => {
        setAge(event.target.value);
    };
    const handleWeight = (event: any) => {
        setWeight(event.target.value);
    };
    const handleGender = (event: any) => {
        setGender(event.target.value);
    };
    const handleGoal = (event: any) => {
        setGoal(event.target.value);
    };

  


    const handleSubmit = async (event: any) => {
        console.log()
      if (!fullname || !age || !weight || !gender || !goal_value) {
          
        if (!fullname) console.log("fullname is missing");
        if (!age) console.log("age is missing");
        if (!weight) console.log("weight is missing");
        if (!gender) console.log("gender is missing");
        if (!goal_value) console.log("goal_value is missing");
          alert("Please fill in all fields!");
          return; 
        }
      event.preventDefault();
      const formData = {
        data: {
          fullname,
          age,
          weight,
          gender,
          goal
        },
      };
  
      try {
          const response = await fetch('https://1991-63-176-105-72.ngrok-free.app/api/user-infos', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });
  
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
  
          const result = await response.json();
          console.log('API response:', result);
          setFullName('')
          setAge('')
          setWeight('')
          setGender('')
          setGoal('')
          setOpen(true)
          router.push('/dietplan')
      } catch (error) {
          console.error('Error during API request:', error);
      }
    };
  
    return (
      <>
        <div className={style.wrapper}>
          {/* Logo Section */}
          <div className={style.logo_container}>
            <div className={style.logo}>A&G Health Team</div>
          </div>
          <Box sx={{ width: 500}}>
                 <Snackbar
                    style={{zIndex:0}}
                    autoHideDuration={3500}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={open}
                    onClose={handleClose}
                 >
                    <Alert
                       onClose={handleClose}
                       severity='success'
                       sx={{ width: '100%' }}
                    >
                       Request succsess!
                    </Alert>
                 </Snackbar>
              </Box>
  
          <div className={style.image_container}>
            <img
              src="/images/about_bg.jpg"
              alt="Breakfast setting"
              className={style.img}
            />
            <div className={style.overlay}>
              <div className={style.form_box}>
                <input 
                type="text" 
                className={style.username} 
                placeholder="Full Name" 
                value={fullname}
                onChange={handleFullName}
                />
                <input
                  type="number"
                  className={style.age}
                  placeholder="Age"
                  value={age}
                  onChange={handleAge}
                />
                 <input
                  type="number"
                  className={style.mass}
                  placeholder="Weight"
                  value={weight}
                  onChange={handleWeight}
                />
                 <input
                  type="text"
                  className={style.gender}
                  placeholder="Gender"
                  value={gender}
                  onChange={handleGender}
                />
               <div className={style.goal}>
                <Dropdown value={goal_value} onChange={handleGoal} options={goals} optionLabel="name" 
                    placeholder="Select you goal_value" className={style.dropdown} />
            </div>
                
              </div>
              <div className={style.submit_box}>
                <div className={style.signup} onClick={e => handleSubmit(e)}>Submit</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}