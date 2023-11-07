library(tidyverse)
library(moderndive)
library(infer)
# please load hrdata


# movie example in the book ####
# (1) observed test statistic
# H0: Avg Rating of Romance = Avg Rating of Action
# H1: Avg Rating of Romance > Avg Rating of Action
obs_movies <- movies_sample %>%
  specify(rating~genre) %>%
  calculate(stat="diff in means", 
            order=c("Romance","Action"))



# (2) generate null
null_movies <- movies_sample %>%
  specify(rating~genre) %>%
  hypothesise(null="independence") %>%
  generate(reps=1000, type="permute") %>%
  calculate(stat="diff in means",
            order=c("Romance", "Action"))



# (3) visualize null with p-value
visualize(null_movies) + 
  shade_p_value(obs_stat = obs_movies, direction="right")


# (4) get p-value
get_p_value(null_movies, obs_stat = obs_movies,direction="right")


# conclusion
#p value less than 0.05, reject H0


# hrdata #####
# select only hr and management departments 
# using %in%, compare left rate between hr and mgmt departments
hr_mgmt <- hrdata %>% 
  filter(department %in% c("hr", "management"))

proportions(table(hr_mgmt$left, hr_mgmt$department),
            margin=2)


# H0: avg left rate same for both
# H1: mgmt has lower left rate
# left rate (mgmt) < left rate (hr)

# get observed test statistic
obs_hr <- hr_mgmt %>%
  specify(left~department, success="1") %>%
  calculate(stat="diff in props",
            order=c("management","hr"))


# generate null distribution
null_hr <- hr_mgmt %>%
  specify(left~department, success="1") %>%
  hypothesise(null="independence") %>%
  generate(reps=1000, type = "permute") %>%
  calculate(stat="diff in props",
            order=c("management","hr"))


# visualize null with p-value
visualize(null_hr) +
  shade_p_value(obs_stat=obs_hr,
                direction="left")
get_p_value(null_hr, obs_hr, direction="left")
  

# conclusion
#management has lower left rate


# quick review
# find 95% confidence interval
  boot_hr <- hr_mgmt %>%
  specify(left~department, success="1") %>%
  generate(reps=1000) %>%
  calculate(stat="diff in props",
            order=c("management","hr"))

get_confidence_interval(boot_hr,type="percentile")

#####################################
# Check if the department with lower left rate has higher satisfaction?
# H0: same satisfaction on average 
# H1: mgmt has higher satisfaction on average

# find observed test statistic
obs_stat <- hr_mgmt %>%
  specify(satisfaction~department) %>%
  calculate(stat="diff in means",
            order=c("management", "hr"))


# generate null
null_sat <- hr_mgmt %>%
  specify(satisfaction~department) %>%
  hypothesize(null="independence")


# get p value
null_sat %>%
  get_p_value(obs_stat = )


# conclusion
# reject H0, management has higher satisfaction on average 


################################
# Practice
# Choose two other departments in the data sets. 
# 1. Setup hypothesis test to compare the left rates
# 2. Setup hypothesis test to compare average satisfaction
# 3. Complete in-class #23 on BB. 
















