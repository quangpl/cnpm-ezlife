<!--  Book Manager   -->
function editBook(element) {
    console.log($(element).attr("data-id"))
}
function deleteBook(element) {
    console.log($(element).attr("data-id"))
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}


$(document).ready(function () {
    $('#book-submit').click(function (e) {
        e.preventDefault();
     let bookId;
     if(bookId){
         //Post to router edit
     }else {
         $.post('/admin/book', {
             typeId: $('#typeId').val(),
             name: $('#name').val(),
             author: $('#author').val(),
             numberOf: $('#numberOf').val(),
             unitPrice: $('#unitPrice').val(),
             shortDesc: $('#shortDesc').val(),
             fullDesc: $('#fullDesc').val(),
             image: $('#image').val(),
             tag: $('#tag').val()
         }, function (result) {
             if (result.success === true) {
                 $('#typeId').val('');
                 $('#name').val();
                 $('#author').val('');
                 $('#numberOf').val('');
                 $('#unitPrice').val('');
                 $('#shortDesc').val('');
                 $('#fullDesc').val('');
                 $('#image').val('');
                 $('#tag').val('');
                 Swal.fire({
                     type: 'success',
                     title: 'Done',
                     text: 'You have been add completely'
                 })

             } else {
                 Swal.fire({
                     type: 'error',
                     title: 'Error',
                     text: 'Your input is not valid'
                 })
             }

         });
     }

    });
});