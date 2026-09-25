import 'dart:convert';
import 'dart:io';

void main() async {
  final server = await HttpServer.bind(
    InternetAddress.loopbackIPv4,
    3000,
  );

  print('SERVER STARTED');
  print('http://localhost:3000');

  await for (HttpRequest request in server) {
    print('Request: ${request.uri.path}');

    request.response.headers.add(
      'Access-Control-Allow-Origin',
      '*',
    );

    request.response.headers.contentType = ContentType.json;

    if (request.uri.path == '/api/resume') {
      final resume = {
        'name': 'Аружан Амангельдиева',
        'age': 20,
        'profession': 'Студентка',
        'experience': 'Бариста — Drinkit',
        'education':
            'Международный университет Астана',
        'specialty':
            'Вычислительная техника и программное обеспечение',
        'skills': [
          'Работа с кассой',
          'Коммуникабельность',
          'Ответственность',
          'Стрессоустойчивость',
          'Быстрое обучение',
          'Работа в команде'
        ],
        'languages': [
          'Русский — свободно',
          'Казахский — свободно'
        ],
        'phone': '+7 700 421 72 05',
        'email': 'aruzzhanaa15@gmail.com',
        'instagram': '@askvvnaa'
      };

      request.response.write(jsonEncode(resume));
    } else {
      request.response.statusCode = 404;

      request.response.write(
        jsonEncode({
          'error': 'Страница не найдена'
        }),
      );
    }

    await request.response.close();
  }
}