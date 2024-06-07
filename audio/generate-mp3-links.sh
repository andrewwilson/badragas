#!/bin/bash

output_file="index.html"

# Start the HTML file
echo "<html><body>" > $output_file

# Use find to locate all MP3 files and process them with awk and sed
find . -type f -name "*.mp3" | awk -F/ '{
    # Close previous folder section if folder changes
    if (folder != $2) {
        if (folder != "") {
            print "</ul>" >> "'"$output_file"'"
        }
        folder = $2
        print "<h2>" folder "</h2><ul>" >> "'"$output_file"'"
    }
    # Add the MP3 file link
    print "<li><a href=\"" $0 "\">" $NF "</a></li>" >> "'"$output_file"'"
}' 

# Close the last folder section
echo "</ul></body></html>" >> $output_file

echo "HTML file created at $output_file"
