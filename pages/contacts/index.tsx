import style from "./style.module.scss";
import * as React from "react";
import { useRef, useState } from "react";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import { Alert, Box, Snackbar } from "@mui/material";
import Link from "next/link";
export default function Contacts() {

  const form: any = useRef();

  // * Handling an alert that pop ups after succsessful submit
  const [open, setOpen] = useState(false);
  const handleClose = (
     event?: React.SyntheticEvent | Event,
     reason?: string
  ) => {
     if (reason === 'clickaway') return;
     setOpen(false);
  };



  // * Storing data (comment and rating) in object
  interface SubmitData {
    ratingValue : number | null;
    comment : string;
  }
  const [value, setValue] = React.useState<number | null>(2);
  const [comment , setComment] = useState('')

  const handleSubmit = (event:any) =>{
    event.preventDefault();
    const data : SubmitData = {} as SubmitData;
    data.ratingValue = value
    data.comment = comment
    setValue(0)
    setComment('')
    setOpen(true)
    console.log(data.ratingValue)
    console.log(data.comment)
  }

  return (
    <div className={style.container}>
      {/* Alert popup message */}
        <Box sx={{ width: 500}}>
               <Snackbar
                  style={{zIndex:0}}
                  autoHideDuration={2000}
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
      <div className={style.wrapper}>
        <div className={style.commentSection}>
          <div className={style.text}>
            We Value Your Feedback – Get in Touch!
          </div>
          <div className={style.comment}>
            <form ref={form} onSubmit={handleSubmit}  className={style.feedback}>
              <TextField
                required
                id="outlined-multiline-static"
                label="Comments"
                value={comment}
                InputProps={{
                  style: {
                    borderRadius: "25px",
                  },
                }}
                multiline
                rows={3}
                onChange={(e) => setComment(e.target.value)}
              />
              <div className={style.rating}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  className={style.stars}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                
              </div>
              <button type={'submit'} className={style.button}>Submit</button>
            </form>
            <div className={style.media}>
              <img src="/images/comment.png" alt="comment" />
            </div>
          </div>
        </div>

        <div className={style.follow}>
          <div className={style.subscribe}><img src="/images/subscribe.png" alt="subscribe" /></div>
          <div className={style.socialMedia}>
            <div className={style.items}><img src="/icons/insta_icon.png" alt="Instagram" /><Link href={''} className={style.link}>https://skibidirizzlers.com</Link></div>
            <div className={style.items}><img src="/icons/teleg_icon.png" alt="Telegram" /><Link href={''} className={style.link}>https://skibidirizzlers.com</Link></div>
            <div className={style.items}><img src="/icons/x_icon.png" alt="X" /><Link href={''} className={style.link}>https://skibidirizzlers.com</Link></div>
          </div>
          <div className={style.followUs}><img src="/images/followUs.png" alt="Follow Us" /></div>
        </div>
      </div>
    </div>
  );
}
