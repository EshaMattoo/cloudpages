<script runat="server" language="javascript">
    Platform.Load("Core", "1.1.5");
    Platform.Function.ContentBlockByKey('%%prefix%%-ssjs-lib');

    var dm = Platform.Request.GetQueryStringParameter('debugMode'),
    	debugMode = (dm) ? dm : null;

	debug(Platform.Request.GetQueryStringParameter('errorDebug'));
</script>

%%[
	IF Empty(QueryParameter('errorCode')) THEN 
	    SET @errorCode = 500 
	ELSE 
	    SET @errorCode = QueryParameter('errorCode')
	ENDIF
	    
	IF Empty(QueryParameter('errorMessage')) THEN 
	    SET @errorMessage = 'Oops. Something went wrong.'
	ELSE 
	    SET @errorMessage = QueryParameter('errorMessage')
	ENDIF
    ]%%

<!DOCTYPE html>
<html>

<head>
    <title>Error Page</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Numans');

    html,
    body {
        background-image: url('https://images.freecreatives.com/wp-content/uploads/2015/10/beautiful-moon-widescreen-full-hd-wallpaper-free-background-pictures-download.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        font-family: 'Numans', sans-serif;
    }

    .container {
        height: 90%;
        align-content: center;
    }

    .card {
        height: auto;
        margin-top: auto;
        margin-bottom: auto;
        width: 400px;
        background-color: rgba(0, 0, 0, 0.5) !important;
        color: white;
    }
     .card h1 {
      font-size: 6.50rem;
     }

     .card h5 {
      font-size: 0.85rem;
     }


    </style>
</head>

<body>
    <div class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card">

                <div class="card-body align-items-center d-flex flex-column justify-content-center">
                   <h1>%%=v(@errorCode)=%%</h1>
                   <h5>%%=v(@errorMessage)=%%</h5>
                </div>

            </div>
        </div>
    </div>
</body>

</html>