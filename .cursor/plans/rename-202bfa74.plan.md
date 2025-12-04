<!-- 202bfa74-212f-4572-8f7d-85967299e00b 241fe064-7d3b-4adb-a68d-447a36283067 -->
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

### To-dos

- [ ] Read and analyze all images to identify their content
- [ ] Generate unique, descriptive kebab-case names for each image
- [ ] Rename all files to their new descriptive names