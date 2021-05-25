---
pageClass: home-page
# some data for the components

name: Harry Potter
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/mtobeiyf
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com

cv: https://en.wikipedia.org/wiki/Harry_Potter
bio: Student at Hogwarts School
email: harry (at) hogwarts (dot) edu
---

<!-- <ProfileSection :frontmatter="$page.frontmatter" /> -->

## Introduction

Release of a new SSL benchmark for view and disease severity classifica-tion from echocardiograms.Our new dataset is directly inspired by the need forautomated preliminary assessment of aortic stenosis (AS). The dataset can help assessperformance on two challenging image classification tasks that are clinically-relevantfor assessing AS: view classification and disease severity diagnosis classification. Bothtasks are challenging to collect labeled data for given the lack of view labels in currentroutine image collection and the complexity of AS diagnoses. The diagnosis task furtherrequires aggregating predictions across many images of the same patient to make acoherent prediction for that individual. This dataset includes a small labeled set derivedfrom 260 patients and annotated by expert clinicians for view and diagnosis tasks. Thedataset further includes a largeunlabeledset from 2645 patients. 

## Motivation
Our motivating task is to improve timely diagnosis and treatment of aortic stenosis (AS),a common cardiac valve condition. If left untreated, severe AS has lower 5-year survivalrates than several metastatic cancers (Howlader et al., 2020; Clark et al., 2012). With timelydiagnosis and surgical or transcatheter aortic valve replacement, AS becomes a treatablecondition with very low mortality (Lancellotti et al., 2018). Unfortunately, under currentpractice up to 2/3 of symptomatic AS patients may never get referred for care (Tanget al., 2018; Brennan et al., 2019). There is an urgent need in improve timely detectionand treatment of this life-threatening condition. In this study, we develop and validatemachine learning methods for automating the preliminary interpretation of cardiac ultrasound(echocardiogram) images, with the goal of expanding access to rapid and accurate diagnosisof this condition, while overcoming constraints on the availability of labeled data needed totrain these methods effectively

## Examples
<img src='/images/data_samples/Appendix_PLAX1.png' style='width:30%'>
<img src='/images/data_samples/Appendix_PSAX1.png' style='width:30%'>
<img src='/images/data_samples/Appendix_Other1.png' style='width:30%'>
<br/>
<img src='/images/data_samples/Appendix_PLAX2.png' style='width:30%'>
<img src='/images/data_samples/Appendix_PSAX2.png' style='width:30%'>
<img src='/images/data_samples/Appendix_Other2.png' style='width:30%'>
<br/>
<img src='/images/data_samples/Appendix_PLAX3.png' style='width:30%'>
<img src='/images/data_samples/Appendix_PSAX3.png' style='width:30%'>
<img src='/images/data_samples/Appendix_Other3.png' style='width:30%'>
<br/>
<img src='/images/data_samples/Appendix_PLAX4.png' style='width:30%'>
<img src='/images/data_samples/Appendix_PSAX4.png' style='width:30%'>
<img src='/images/data_samples/Appendix_Other4.png' style='width:30%'>

## Accessing Dataset
HOW DO WE COLLECT APPLICATIONS?

<!-- ## News

- [Sept 1991] Attended Hogwarts
- [July 1980] Born in Godric's Hollow, West Country, England, Great Britain -->


<!-- ## Education & Experiences

- **Hogwarts School of Witchcraft and Wizardry** <br/>
Sept 1991 - 1997 -->


<!-- ## Projects


[→ Full list](/projects/)

<ProjectCard image="/projects/1.png" hideBorder=true>

  **The Making of Harry Potter's Wand**

  Harry P., Hermione G., *et al*
  
  Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.
  
  [[PDF](https://github.com/zzyBen/zzyBen.github.io/blob/master/filesnpix.pdf)] [[arXiv](https://arxiv.org)]

</ProjectCard> -->

<!-- <ProjectCard hideBorder=true> -->

  <!-- **Harry Potter and the Deathly Hallows**
  
  In the epilogue of Deathly Hallows, which is set 19 years after Voldemort's death, Harry and Ginny are a couple and have three children: James Sirius Potter, who has already been at Hogwarts for at least one year, Albus Severus Potter, who is starting his first year there, and Lily Luna Potter, who is two years away from her first year at the school.

  [[Link](https://www.google.com)]

</ProjectCard> -->


<!-- ## Awards & Honors

### Contests

- First place in **The Hogwarts House Cup** -->


## Paper
A New Semi-supervised Learning Benchmark for ClassifyingView and Diagnosing Aortic Stenosis from Echocardiograms

### Cite
PLACE_HOLDER [PFD]

## Contact
mhughes@cs.tufts.edu


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
