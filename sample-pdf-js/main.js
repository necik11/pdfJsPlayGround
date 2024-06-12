import * as pdfjsLib from "./pdf.mjs";
// If absolute URL from the remote server is provided, configure the CORS
// header on that server.
var url = 'https://raw.githubusercontent.com/necik11/pdfJsPlayGround/4b4dd7d7612599b2368e142bac7fd7317db51ac0/brokenPDF.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
// var { pdfjsLib } = globalThis;

// The workerSrc property shall be specified.
// pdfjsLib.GlobalWorkerOptions.workerSrc = 'mozilla.github.io/pdf.js/build/pdf.worker.mjs';
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.379/pdf.worker.mjs';

// Asynchronous download of PDF
var loadingTask = pdfjsLib.getDocument(url);
loadingTask.promise.then(function (pdf) {
    console.log('PDF loaded');

    // Fetch the first page
    var pageNumber = 1;
    pdf.getPage(pageNumber).then(function (page) {
        console.log('Page loaded test2');

        var scale = 1;
        var viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        var canvas = document.getElementById('the-pdfjscanvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        var renderTask = page.render(renderContext);
        renderTask.promise.then(function () {
            console.log('Page rendered Test2');
        });
    });
}, function (reason) {
    // PDF loading error
    console.error(reason);
});