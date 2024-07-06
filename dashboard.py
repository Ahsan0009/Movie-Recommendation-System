from flask import render_template
app = flask(__name__)
@app.route("/dashboard", methods=["GET"])
def dashboard():
    # Add your dashboard logic here
    #...
    return render_template("dashboard.html")