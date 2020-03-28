import React, { useContext, useState } from 'react'
import ListItemContext from '../../context/ListItemContext'
import useStyles from '../../muiStyles/modal'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

export default () => {
  const noMediaImgPath = '/images/noImgs.jpg'

  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const {
    media: { images, videos }
  } = useContext(ListItemContext)
  const numOfRecordImagesMinusOne = images.length - 1

  const mediaArr = images.concat(videos)
  const defaultObj = { id: mediaArr[0], index: 0, type: 'img' }
  const [mediaObj, setMediaObj] = useState(defaultObj)

  const [isNextMedia, setIsNextMedia] = useState(!!mediaArr[1])
  const [isPreviousMedia, setIsPreviousMedia] = useState(false)

  const MediaTag = () => {
    const { id, type } = mediaObj
    const src = id ? process.env.REACT_APP_STORAGE_PATH + id : noMediaImgPath
    return type === 'img' ? (
      <img src={src} className={classes.media} id="recordMedia" />
    ) : (
      <video src={src} id="recordMedia" controls/>
    )
  }

  const advanceMedia = (e, target) => {
    e.stopPropagation()
    const { index } = mediaObj
    const newIndex = index + (target === 'next' ? +1 : -1)
    const isImgIndex = newIndex < images.length    
    const type = isImgIndex ? 'img' : 'video'
    setMediaObj({ id: mediaArr[newIndex], index: newIndex, type })
    checkAdvance(newIndex)
  }

  const checkAdvance = newIndex => {
    const previousExists = !!mediaArr[newIndex - 1]
    setIsPreviousMedia(previousExists)

    const nextExists = !!mediaArr[newIndex + 1]
    setIsNextMedia(nextExists)
  }

  const handleOpen = e => {
    e.stopPropagation()
    setOpen(true)
  }
  const handleClose = () => setOpen(false)
  return (
    <div className="img-container">
      <div onClick={handleOpen}>
        <MediaTag />
      </div>

      <Modal
        root={classes.root}
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <MediaTag />
            <div className={classes.advanceButtonsContainer}>
              <button
                onClick={advanceMedia}
                className={classes.advanceButton}
                disabled={!isPreviousMedia}
              >
                קודם
              </button>
              <button
                onClick={(e) => advanceMedia(e, 'next')}
                className={classes.advanceButton}
                disabled={!isNextMedia}
              >
                הבא
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
      {numOfRecordImagesMinusOne !== -1 && (
        <div className="img-icon-container">
          <div className="img-icon smaller-text">{numOfRecordImagesMinusOne}+</div>
        </div>
      )}
    </div>
  )
}
