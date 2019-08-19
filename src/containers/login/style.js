export  const styles = theme => {
  //console.log(theme)
  return ({
    root: {
      padding: theme.spacing(3, 2),
      display:"flex",
      flexDorection:"column",
      height: "-webkit-fill-available",
      alignItems: "center",
      justifyContent: "center",
    },
    main:{
        width:"520px",
        height:"480px"
    },
    header:{
      marginTop:40,
      backgroundColor:theme.palette.primary.main,
      height:110
    },
    title:{
      color: "white",
      padding:35
    },
    topCircle:{
      width:" 46px",
      height: "46px",
      borderRadius: "100px",
      border: "2px solid white",
      position: "absolute",
      marginRight: "29%",
      marginTop:" 13px",
      [theme.breakpoints.down("sm")]: {
        display:"none"
      },
    },
    midCircle:{
      width:" 40px",
      height: "40px",
      borderRadius: "100px",
      border: "3px solid white",
      position: "absolute",
      marginRight: "32%",
      marginTop:" 75px",
      [theme.breakpoints.down("sm")]: {
        display:"none"
      },
    },
    bottomCircle:{
      width:" 33px",
      height: "33px",
      borderRadius: "100px",
      border: "2px solid white",
      position: "absolute",
      marginRight: "27%",
      marginTop:" 97px",
      [theme.breakpoints.down("sm")]: {
        display:"none"
      },
    },
    formHolder:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop:20,
    },
    margin: {
      margin: theme.spacing(1),
    },
    fab: {
      margin: theme.spacing(1),
      width:"250px",
      height:"41px"
    },
    insideBtn:{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between"
    }
  })
};
