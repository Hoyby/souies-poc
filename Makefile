make-env:
	python -m venv .venv
	.venv/Scripts/pip install -r requirements.txt

run-b:
	.venv/Scripts/python manage.py runserver

run-f:
	yarn run dev