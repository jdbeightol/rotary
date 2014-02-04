#!/bin/bash

headerinfo='<div class="letters">'
footerinfo='</div>'

if [[ ! -n "$(which convert 2>/dev/null)" ]]; then echo "Error: Program \"convert\" is not installed."; exit 1; fi

for year in *; do
    pushd "$year" && (
    
    for month in *; do
        pdflist=()
        imglist=()

        pushd "$month" && (

        for x in *.pdf; do
            convert -density 300 "$x" -quality 100 "${x%.pdf}.png"
            pdflist+="./$year/$month/$x"
        
            for y in "${x%.pdf}"*.png; do
                imglist+="./$year/$month/$y"
            done
        done 

        echo $headerinfo > "../$month.html"
        echo "<h2>$month $year Newsletters</h2>" >> "../$month.html"
        echo "<p>Download the PDF files here:</p>" >> "../$month.html"
        echo "<ul>" >> "../$month.html"

        for a in ${pdflist[@]}; do
            echo "<li><a href=\"$a\">${a%pdf}</a></li>"
        done

        echo "</ul>" >> "../$month.html"

        for b in ${imglist[@]}; do
            echo "<img src=\"$b\" style=\"width:100%;\"/>" >> "../$month.html"
        done

        echo $footerinfo >> "../$month.html"

        popd )
    done

    popd )
done


