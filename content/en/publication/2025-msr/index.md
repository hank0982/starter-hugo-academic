---
title: >
  Learning from Mistakes: Understanding Ad-hoc Logs through Analyzing Accidental Commits
abstract: >
  Developers often insert temporary "print" or "log" instructions into their code to help them better understand runtime behavior, usually when the code is not behaving as they expected. Despite the fact that such monitoring instructions, or "ad-hoc logs," are so commonly used by developers, there is almost no existing literature that studies developers' practices in how they use them. This paucity of knowledge of the use of these ephemeral logs may be largely due to the fact that they typically only exist in the developers' local environments and are removed before they commit their code to their revision control system. In this work, we overcome this challenge by observing that developers occasionally mistakenly forget to remove such instructions before committing, and then they remove them shortly later. Additionally, we further study such developer logging practices by watching and analyzing live-streamed coding videos. Through these empirical approaches, we study where, how, and why developers use ad-hoc logs to better understand their code and its execution. We collect 27 GB of accidental commits that removed 548,880 ad-hoc logs in JavaScript from GitHub Archive repositories to provide the first large-scale dataset and empirical studies on ad-hoc logging practices. Our results reveal several illuminating findings, including a particular propensity for developers to use ad-hoc logs in asynchronous and callback functions. Our findings provide both empirical evidence and a valuable dataset for researchers and tool developers seeking to enhance ad-hoc logging practices, and potentially deepen our understanding of developers' practices towards understanding of software's runtime behaviors.
slides: ""
url_pdf: >
  https://arxiv.org/pdf/2501.09892
publication_types:
  - "1"
authors:
  - admin
author_notes:
publication: "22nd International Conference on Mining Software Repositories"
summary: ""
url_dataset: ""
url_project: ""
publication_short: "MSR"
# url_source: https://github.com/wowchemy/wowchemy-hugo-themes
# url_video: https://youtube.com
doi: false
featured: false
tags:
  - Empirical Study
categories:
  - Software Engineering
projects: 

# image:
#   caption: ""
#   focal_point: ""
#   preview_only: false
date: 2025-01-20T00:00:00Z
url_slides: ""
publishDate: 2025-01-20T00:00:00Z
url_poster: ""
# url_code: https://github.com/wowchemy/wowchemy-hugo-themes
---
Check the paper at [MSR](https://2025.msrconf.org/details/msr-2025-technical-papers/7/Learning-from-Mistakes-Understanding-Ad-hoc-Logs-through-Analyzing-Accidental-Commit) or [ArXiv](https://arxiv.org/abs/2501.09892)