---
name: Rename Marketing Images Based on Content
overview: ""
todos:
  - id: d9c3feb4-4c3a-4022-840f-9e1e531c8f9d
    content: Read and analyze all images to identify their content
    status: pending
  - id: 1e9dcda5-f49b-482c-a81b-b27947ef4006
    content: Generate unique, descriptive kebab-case names for each image
    status: pending
  - id: 7ab91a47-89cf-4093-a405-1161c346a2d4
    content: Rename all files to their new descriptive names
    status: pending
---

# Rename Marketing Images Based on Content

## Approach

1. **Read and analyze all images** in [`/Volumes/Samsung SSD 990 PRO 4TB/OVAL/E123/Marketing/Images/`](/Volumes/Samsung SSD 990 PRO 4TB/OVAL/E123/Marketing/Images/)(/Volumes/Samsung SSD 990 PRO 4TB/OVAL/E123/Marketing/Images/)(/Volumes/Samsung SSD 990 PRO 4TB/OVAL/E123/Marketing/Images/)(/Volumes/Samsung SSD 990 PRO 4TB/OVAL/E123/Marketing/Images/)(/Volumes/Samsung SSD 990 PRO 4TB/OVAL/E123/Marketing/Images/)

- Process all ~90 files with patterns like `1 (X).png` and `a (X).png`
- Use image reading capability to identify visual content

2. **Generate descriptive names**

- Use kebab-case format (e.g., `pills-bottle.png`)
- Keep descriptions brief (e.g., `doctor.png`, `medication.png`, `lifestyle.png`)
- Find distinguishing details for similar images (e.g., `female-doctor.png` vs `male-doctor.png`)

3. **Rename all files**

- Use terminal commands to rename each file with its new descriptive name
- Ensure no naming conflicts occur
- Preserve original `.png` extension

## Expected Outcome

All images will have meaningful names that describe their content, making them easier to identify and use in marketing materials without opening each file.