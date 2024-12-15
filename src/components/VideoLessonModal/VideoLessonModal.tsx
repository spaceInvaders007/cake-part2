import Dialog from "@mui/material/Dialog";
import './VideoLessonModal.css'

interface Props {
    open: string | undefined;
    handleClose: VoidFunction; 
}

export const VideoLessonModal = ({open, handleClose}: Props) => {
    return (
        <Dialog
        open={!!open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        PaperProps={{
            sx: {
              height: "80vh", 
              maxHeight: "80vh",
            },
          }}
      >
       <iframe src={`https://www.youtube.com/embed/${open}?autoplay=1&rel=0`} allow="autoplay"  className="video-iframe" />
      </Dialog>
    )
}