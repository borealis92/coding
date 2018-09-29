import datetime

def header():
    print('-------------------------------')
    print('         Birthday App')
    print('-------------------------------')

def bdayInput():
    print('when were you born? Year, Month, and Day')
    year = int(input('Enter a year[YYYY]: '))
    month = int(input('Enter a month [MM]: '))
    day = int(input('Enter a day[DD]: '))

    birthday = datetime.date(year, month, day)
    return  birthday

def compute(original, target):
    today = datetime.date(target.year, original.month, original.day)
    date = today - target
    return date


def conditionsdays(days):
    if days < 0:
        print('You had your birthday {} days ago this year. '.format(days))
    elif days > 0:
        print('Your birthday is coming up in {} days.'.format(days))
    else:
        print('Your birthday is today!')


def main():
    header()
    bday = bdayInput()
    today = datetime.date.today()
    number_of_days = compute(bday, today)
    conditionsdays(number_of_days)



main()
