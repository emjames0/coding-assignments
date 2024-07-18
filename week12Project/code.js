//Below calls on the document and links the mock API
$(document).ready(function() {
  const apiUrl = 'https://669703b002f3150fb66c6aa7.mockapi.io/TrakRun/runs';
  
  //Below is the function to fetch and display all runs
  function fetchRuns() {
    $.ajax({
      url: apiUrl,
      method: 'GET',
      success: function(runs) {
        $('#run-list .list-group').empty();
        runs.forEach(run => {
          $('#run-list .list-group').append(`
            <li class="list-group-item" data-id="${run.id}">
              <strong>${run.date}</strong> - ${run.distance} km in ${run.time} minutes (Pace: ${run.pace} min/km, Heart BPM: ${run.heartBpm})
              <button class="btn btn-info btn-sm edit-run">Edit</button>
              <button class="btn btn-danger btn-sm delete-run">Delete</button>
            </li>
          `);
        });
      },
      error: function(err) {
        console.error('Error fetching runs:', err);
      }
    });
  }

//Below is the function to add or update a run
  $('#addRunForm').submit(function(event) {
    event.preventDefault();
    const runId = $('#runId').val();
    const newRun = {
      date: $('#date').val(),
      distance: $('#distance').val(),
      time: $('#time').val(),
      pace: $('#pace').val(),
      heartBpm: $('#heartBpm').val(),
      intensity: $('#intensity').val(),
      weather: $('#weather').val(),
      mood: $('#mood').val(),
      notes: $('#notes').val()
    };
    
    const ajaxOptions = {
      url: apiUrl,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newRun),
      success: function() {
        fetchRuns();
        $('#addRunForm')[0].reset();
        $('#runId').val(''); // This resets the data field
      },
      error: function(err) {
        console.error('Error adding run:', err);
      }
    };

    if (runId) {
      ajaxOptions.url = `${apiUrl}/${runId}`;
      ajaxOptions.method = 'PUT';
      ajaxOptions.success = function() {
        fetchRuns();
        $('#addRunForm')[0].reset();
        $('#runId').val(''); // This resets the hidden field
      };
      ajaxOptions.error = function(err) {
        console.error('Error updating run:', err);
      };
    }

    $.ajax(ajaxOptions);
  });

  // Below is the function to delete a run
  $(document).on('click', '.delete-run', function() {
    const runId = $(this).parent().data('id');
    $.ajax({
      url: `${apiUrl}/${runId}`,
      method: 'DELETE',
      success: function() {
        fetchRuns();
      },
      error: function(err) {
        console.error('Error deleting run:', err);
      }
    });
  });

//Below is the function to edit a run
  $(document).on('click', '.edit-run', function() {
    const runId = $(this).parent().data('id');
    $.ajax({
      url: `${apiUrl}/${runId}`,
      method: 'GET',
      success: function(run) {
        $('#runId').val(run.id);
        $('#date').val(run.date);
        $('#distance').val(run.distance);
        $('#time').val(run.time);
        $('#pace').val(run.pace);
        $('#heartBpm').val(run.heartBpm);
        $('#intensity').val(run.intensity);
        $('#weather').val(run.weather);
        $('#mood').val(run.mood);
        $('#notes').val(run.notes);
        $('button[type="submit"]').text('Update Run'); // This changes the button text when it's being updated 
      },
      error: function(err) {
        console.error('Error fetching run:', err);
      }
    });
  });

//Below is the fetch for runs 
  fetchRuns();
});