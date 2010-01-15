task :db do
  sh "mysql -uroot test < db/init.sql"
end

namespace :dbslayer do
  task :start do
    sh "dbslayer -c `pwd`/db/dbslayer.conf -s test -l `pwd`/log/dbslayer.log"
  end
  task :stop do
    sh "curl http://0.0.0.0:9090/shutdown"
  end
  task :kill do
    sh "killall -INT -m dbslayer"
  end
end