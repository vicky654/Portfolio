const HandleExperienceDate = (start, end) => {
  let dateStart, dateEnd;

  // Ensure the start date is valid
  if (Date.parse(start)) {
    dateStart = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "short",
    }).format(new Date(start));
  } else {
    dateStart = "Invalid start date";
  }

  // Handle "Present" case for end date
  if (end === "Present") {
    dateEnd = end;
  } else {
    // Ensure the end date is valid
    if (Date.parse(end)) {
      dateEnd = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
      }).format(new Date(end));
    } else {
      dateEnd = "Invalid end date";
    }
  }

  return `${dateStart} - ${dateEnd}`;
};

export default HandleExperienceDate;
