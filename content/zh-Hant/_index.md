---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
  - block: markdown
    id: news
    content:
      title: News
      text: >
        - 2023/06/26 -- I am excited to share that I will be interning with the SAP, Newport Beach this summer with {{% mention "tobias-schimmer" %}}!

        - 2023/06/23 -- Update my personal website

        - 2023/06/17 Congrats! Zhendong is officially {{% mention "zhendong-wang" %}}!

        - 2023/01/06 Enjoy Maui! at [HICSS](https://hicss.hawaii.edu/)
    design:
      # See Page Builder docs for all section customization options.
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
  
  - block: collection
    id: collection
    content:
      title: Publications
      text: |-
        Check my [Google Scholar](https://scholar.google.com/citations?user=pOtvIJwAAAAJ) as well! All publications can be found [here](./publication/)
      filters:
        folders:
          - publication
        exclude_featured: false
    design:
      columns: '2'
      view: citation
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      # default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      # buttons:
      #   - name: All
      #     tag: '*'
      #   - name: Deep Learning
      #     tag: Deep Learning
      #   - name: Other
      #     tag: Demo
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: compact
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        You can find me at random coffee shops near UC Irvine. My current favorites are Stereoscope Coffee and Play Coffee! Feel free to ask me anything!
      # Contact (add or remove contact options as necessary)
      email: yihungc1@uci.edu
      # phone: 888 888 88 88
      appointment_url: 'https://calendly.com/yihungc1/30min'
      # address:
      #   street: 450 Serra Mall
      #   city: Stanford
      #   region: CA
      #   postcode: '94305'
      #   country: United States
      #   country_code: US
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/Twitter'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: 'skype:echo123?call'
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      # form:
      #   provider: netlify
      #   formspree:
      #     id:
      #   netlify:
      #     # Enable CAPTCHA challenge to reduce spam?
      #     captcha: false
    design:
      columns: '2'
---
