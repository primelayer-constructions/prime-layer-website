from flask import Flask, render_template, request
from flask_mail import Mail, Message

app = Flask(__name__)

# Mail configuration 
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'primelayerconstructions@gmail.com'
app.config['MAIL_PASSWORD'] = 'zvvcytguychitzdx'  # use app password for Gmail, not your login

mail = Mail(app)

@app.route("/")
def home():
    return render_template("index.html", body_class="bg-home")

@app.route("/services")
def services():
    return render_template("services.html", body_class="bg-services")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html", body_class="bg-gallery")
@app.route("/about")
def about():
    return render_template("about.html", body_class="bg-gallery")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        phone = request.form["phone"]
        message = request.form["message"]
        service = request.form["service"]

        msg = Message("New Inquiry from Prime Layer Website",
                      sender='primelayerconstructions@gmail.com',
                      recipients=['primelayerconstructions@gmail.com'])
        msg.body = f"""
        Name: {name}
        Email: {email}
        Phone: {phone}
        Service: {service}
        Message: {message}
        """
        mail.send(msg)

        return render_template("success.html", body_class="bg-contact")
    
    return render_template("contact.html", body_class="bg-contact")

