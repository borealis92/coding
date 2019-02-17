name=resume-aurora-siegel
pdflatex ${name}.tex
rm -f ${name}.bak ${name}.aux ${name}.log ${name}.out ${name}.nav ${name}.snm ${name}.toc ${name}.bbl ${name}.blg ${name}.lof texput.log *~
evince ${name}.pdf &
