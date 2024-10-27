import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    MODSARFA_1: {
      jobTitle: "Software Development Intern @",
      duration: "JUNE 2024 - SEPTEMBER 2024",
      desc: [
        "Designed and implemented a comprehensive dashboard to monitor key business metrics, including stock levels, revenue, net profit, and other critical performance indicators.",
        "Developed and deployed a robust till/checkout system for employees to efficiently process customer orders, ensuring accurate record-keeping of transactions and automated receipt generation. This system seamlessly updates all relevant metrics such as revenue, profit, sales, and stock levels in real-time."
      ]
    },
    "University of Wolverhampton": {
      jobTitle: "Teaching Assistant @",
      duration: "FEB 2024 - JUNE 2024",
      desc: [
        "Lead Office hours for 30+ students in the Robotics Engineering Course workshops, offering support on Python, Jupyter Notebooks, and CoppeliaSim.",
        "Delivered workshops on integrating behavior trees in robot navigation, guiding students in developing and debugging autonomous systems..",
        "Optimized CoppeliaSim simulations and instructed on real-time debugging, enhancing students' problem-solving and algorithm development skills."
      ]
    },
    MODSARFA_2: {
      jobTitle: "Software Development Intern @",
      duration: "SEPTEMBER 2023 - DECEMBER 2023",
      desc: [
        "Spearheaded the end-to-end development of a robust e-commerce website, leveraging HTML, CSS, JavaScript, PHP, and other relevant technologies.",
        "Designed and implemented user-friendly interfaces, ensuring seamless navigation and optimal user experience across multiple devices.",
        "Strategically enhanced the website's features and user experience, resulting in a remarkable 37% increase in revenue. As well as Implementing targeted marketing strategies and customer engagement initiatives, effectively doubling the number of customers and expanding the client base.",
        "Conducted thorough testing and debugging procedures to identify and resolve software defects, ensuring the reliability and stability of the e-commerce platform.",
        "Utilized version control systems such as Git to manage code repositories and track changes throughout the development lifecycle."
      ]
    }

  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
